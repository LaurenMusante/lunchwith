const mailjet = require('node-mailjet').connect(
  '0a0279930f85fc1b7748d2c0922107fa',
  '78b20bb5755e3f060253a8feac599c44'
);
const request = mailjet.post('send', { version: 'v3.1' }).request({
  Messages: [
    {
      From: {
        Email: 'lauren.musante@gmail.com',
        Name: 'Lauren'
      },
      To: [
        {
          Email: 'lauren.musante@gmail.com',
          Name: 'Lauren'
        }
      ],
      Subject: 'Greetings from Mailjet.',
      TextPart: 'My first Mailjet email',
      HTMLPart:
        "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
      CustomID: 'AppGettingStartedTest'
    }
  ]
});
request
  .then(result => {
    console.log(result.body);
  })
  .catch(err => {
    console.log(err.statusCode);
  });
