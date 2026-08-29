import img0217a from '../../../media/0217_0';
import img0217b from '../../../media/0217_1';
import img0217c from '../../../media/0217_2';
import img0223a from '../../../media/0223_0';
import img0223b from '../../../media/0223_1';
import img0223c from '../../../media/0223_2';
import img0223d from '../../../media/0223_3';
import wedding00 from '../../../media/wedding_00';
import wedding01 from '../../../media/wedding_01';
import wedding02 from '../../../media/wedding_02';
import wedding03 from '../../../media/wedding_03';
import wedding04 from '../../../media/wedding_04';
import wedding05 from '../../../media/wedding_05';
import wedding06 from '../../../media/wedding_06';
import wedding07 from '../../../media/wedding_07';

export const runtime = 'nodejs';

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
    data: wedding00 + wedding01 + wedding02 + wedding03 + wedding04 + wedding05 + wedding06 + wedding07,
    type: 'image/webp',
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
