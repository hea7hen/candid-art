'use client';

/* Client helper to launch Razorpay checkout.
   Calls /api/create-order on our backend, then mounts the Razorpay modal. */

function loadRazorpayScript() {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') return resolve(false);
    if (window.Razorpay) return resolve(true);
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export async function openRazorpay(product) {
  const ok = await loadRazorpayScript();
  if (!ok) {
    alert('Razorpay SDK failed to load. Check your connection.');
    return;
  }

  let order;
  try {
    const res = await fetch('/api/create-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: product.price * 100, // paise
        currency: 'INR',
        receipt: `rcpt_${product.slug}_${Date.now()}`,
        notes: { product: product.name },
      }),
    });
    order = await res.json();
    if (!res.ok) throw new Error(order.error || 'Could not create order');
  } catch (err) {
    console.error(err);
    alert(
      'Razorpay is not configured yet. Add RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET to .env.local and restart.',
    );
    return;
  }

  const keyId =
    process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_YOUR_KEY_ID';

  const options = {
    key: keyId,
    amount: order.amount,
    currency: order.currency,
    name: 'Candid Art',
    description: product.name,
    order_id: order.id,
    image: '/favicon.svg',
    theme: { color: '#C15F3C' },
    prefill: {
      name: '',
      email: '',
      contact: '',
    },
    handler: (response) => {
      console.log('Razorpay success:', response);
      alert(`Thank you! Payment ID: ${response.razorpay_payment_id}`);
    },
    modal: {
      ondismiss: () => console.log('Razorpay modal dismissed'),
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.on('payment.failed', (resp) => {
    console.error('Razorpay failed:', resp.error);
    alert(`Payment failed: ${resp.error.description}`);
  });
  rzp.open();
}
