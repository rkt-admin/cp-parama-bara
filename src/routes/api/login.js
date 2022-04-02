// import { OAuth2Client } from 'google-auth-library'
// let CLIENT_ID = '1084908729896-9heh1hn3bqp3e3ibeip70l2ds6vqahhj'
// const client = new OAuth2Client(CLIENT_ID)

// /** @type {import('./login').RequestHandler} */
// export async function post({ request }) {
//   const data = await request.formData()
//   // console.log(data)
//   const ticket = await client.verifyIdToken({
//     idToken: data.get.toString(),
//     audience: CLIENT_ID // Specify the CLIENT_ID of the app that accesses the backend
//     // Or, if multiple clients access the backend:
//     //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
//   })
//   const payload = ticket.getPayload()
//   const userid = payload['sub']
//   // console.log(userid)
//   // If request specified a G Suite domain:
//   // const domain = payload['hd'];
//   return {
//     body: userid
//   }
// }
// // verify().catch(console.error);
