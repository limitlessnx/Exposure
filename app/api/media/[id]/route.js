import img0217a from '../../../media/0217_0';
import img0217b from '../../../media/0217_1';
import img0217c from '../../../media/0217_2';
import img0223a from '../../../media/0223_0';
import img0223b from '../../../media/0223_1';
import img0223c from '../../../media/0223_2';
import img0223d from '../../../media/0223_3';
import wedding0 from '../../../media/wedding_0';
import wedding1 from '../../../media/wedding_1';
import wedding2 from '../../../media/wedding_2';
import wedding3 from '../../../media/wedding_3';
import wedding4 from '../../../media/wedding_4';
import wedding5 from '../../../media/wedding_5';
import wedding6 from '../../../media/wedding_6';
import wedding7 from '../../../media/wedding_7';
import wedding8 from '../../../media/wedding_8';
import wedding9 from '../../../media/wedding_9';
import wedding10 from '../../../media/wedding_10';
import wedding11 from '../../../media/wedding_11';

export const runtime = 'nodejs';

// Xposure media is kept server-side so the site can serve the exact portfolio artwork without stock-image substitutions.
const images = {
  '0217': {
    data: img0217a + img0217b + img0217c,
    type: 'image/webp',
  },
  '0223': {
    data: img0223a + img0223b + img0223c + img0223d,
    type: 'image/webp',
  },
  'wedding': {
    data: wedding0 + wedding1 + wedding2 + wedding3 + wedding4 + wedding5 + wedding6 + wedding7 + wedding8 + wedding9 + wedding10 + wedding11,
    type: 'image/jpeg',
  },
};

const fallbacks = {
  '0215': 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1800&q=92',
  '0218': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1800&q=92',
  '0219': 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=92',
  '0220': 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1800&q=92',
  '0221': 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1800&q=92',
  '0224': 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1800&q=92',
};

export async function GET(_request, { params }) {
  const { id } = await params;
  const image = images[id];

  if (image) {
    const body = Buffer.from(image.data, 'base64');
    return new Response(body, {
      headers: {
        'Content-Type': image.type,
        'Cache-Control': 'public, max-age=31536000, immutable',
        'Content-Length': String(body.length),
      },
    });
  }

  const fallback = fallbacks[id];
  if (fallback) {
    return Response.redirect(fallback, 307);
  }

  return new Response('Not found', { status: 404 });
}
