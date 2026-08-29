import img0217a from '../../../media/0217_0';
import img0217b from '../../../media/0217_1';
import img0217c from '../../../media/0217_2';
import img0223a from '../../../media/0223_0';
import img0223b from '../../../media/0223_1';
import img0223c from '../../../media/0223_2';
import img0223d from '../../../media/0223_3';

export const runtime = 'nodejs';

const images = {
  '0217': img0217a + img0217b + img0217c,
  '0223': img0223a + img0223b + img0223c + img0223d,
};

export async function GET(_request, { params }) {
  const { id } = await params;
  const encoded = images[id];

  if (!encoded) {
    return new Response('Not found', { status: 404 });
  }

  const body = Buffer.from(encoded, 'base64');
  return new Response(body, {
    headers: {
      'Content-Type': 'image/webp',
      'Cache-Control': 'public, max-age=31536000, immutable',
      'Content-Length': String(body.length),
    },
  });
}
