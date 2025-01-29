export async function onRequest({ request }) {
  const formData = await request.formData();
  const imgFile = formData.get('file');

  const body = new FormData();
  body.append('image', imgFile);

  return fetch(`https://api.imgur.com/3/upload`, {
    method: "POST",
    headers: {
      Authorization: 'Client-ID 546c25a59c58ad7'
    },
    body
  });
}
