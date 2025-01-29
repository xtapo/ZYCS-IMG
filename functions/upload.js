export async function onRequest({ request }) {
  const formData = await request.formData();
  const imgFile = formData.get('file');

  const body = new FormData();
  body.append('image', imgFile);

  return fetch(`https://api.imgur.com/3/upload`, {
    method: "POST",
    headers: {
      Authorization: 'Client-ID cdb2b9da7154216'
    },
    body
  });
}
