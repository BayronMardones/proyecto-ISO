const nodemailer = require('nodemailer')
const dotenv = require('dotenv');
dotenv.config();

const sendmail = (req, res) => {
    const { message } = req.body
    const token = 'tpmnoazhskovwcji'
    const mail = 'reservaespacioscondominio@gmail.com'


    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: mail,
            pass: token
        }
    })
    let directory = [//que hay que cambiarlo luego por el de los residentes
        'rodrigo.parra1901@alumnos.ubiobio.cl',
        'bayron.mardones1901@alumnos.ubiobio.cl',
        'gabriela.carrasco1901@alumnos.ubiobio.cl'
    ]
    const mailOptions = {
        from: `Administrador <reserva espacio>`,
        to: directory,
        subject: 'Reserva de espacios',
        text: `${message}`
    }
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            return res.status(400).send({ message: 'Error al enviar el correo' })
        }
        return res.status(200).send({ message: 'Mensaje enviado' })
    })

    transporter.verify().then(() => {
        console.log('Servidor de correos habilitado')
    }).catch(err => {
        console.log('Error al utilizar servidor de correos')
    })
}

module.exports = sendmail