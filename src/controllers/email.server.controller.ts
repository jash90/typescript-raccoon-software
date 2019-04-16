import { Request, Response } from "express";
import nodeoutlook from 'nodejs-nodemailer-outlook';
export default class EmailController {
  public contact = async (req: Request, res: Response, next: Function) => {
    const { name, email, address, phone, message } = req.body;
    nodeoutlook.sendEmail({
      auth: {
        user: "bartlomiejzimny@outlook.com",
        pass: "pass"
      }, from: "bartlomiejzimny@outlook.com",
      to: "bartlomiejzimny@outlook.com",
      subject: 'Contact',
      text: `${name}\n${address}\n${phone}\n${email}\n${message}`,

      onError: (e) => res.json({ error: true, message: e.message, status: 300 }),
      onSuccess: (i) => res.json({ error: false, message: "Email send.", status: 200 })
    });
  };

  public valuation = async (req: Request, res: Response, next: Function) => {
    const { name, email, description, functions, type } = req.body;
    nodeoutlook.sendEmail({
      auth: {
        user: "bartlomiejzimny@outlook.com",
        pass: "pass"
      }, from: "bartlomiejzimny@outlook.com",
      to: "bartlomiejzimny@outlook.com",
      subject: 'Valuation',
      text: `${name}\n${email}\n${type}\n${description}\n${functions}`,

      onError: (e) => res.json({ error: true, message: e.message, status: 300 }),
      onSuccess: (i) => res.json({ error: false, message: "Email send.", status: 200 })
    });
  };
}

export const emailController = new EmailController();
