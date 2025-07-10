import express from "express";
import { CreateUserSchema, SignInSchema } from '@repo/common/types';
import argon2 from "argon2";
import { JWT_SECRET } from '@repo/backend-common/config';

const app = express();

app.use(express.json)

app.post("/signup", async (req, res) => {
  try {

    const { username, password, email } = req.body;

    const parsedDataWithSuccess = CreateUserSchema.safeParse(req.body);

    if (!parsedDataWithSuccess) {
      return res.status(400).json({
        message: "Invalid Inputs"
      })
    }

    const hash = await argon2.hash(password, { type: argon2.argon2id })
    
    const user = ({
      username,
      email,
      password: hash
    })

    res.json({
      message: 'You are signed up'
    })
  } catch (e) {
    res.status(500).json({
      message: "Invalid credentials"
    })
  }
})

app.post("/signin", (req, res) => {
  const { username, password } = req.body;

  const parsedDataWithSuccess = SignInSchema.safeParse(req.body);

  if (!parsedDataWithSuccess) {
    return res.status(400).json({
      message: "Invalid Inputs"
    })
  }

  // const user = 

  // const passwordMatch = await argon2.verify(user.password, password);

  if (user && passwordMatch) {
    const token = jwt.sign(
      {
        id: user._id.toString(),
      },
      JWT_SECRET
    )

    res.json({
      token
    })
  } else {
    res.status(403).json({
      message: "Incorrect credentials"
    })
  }
})

app.post("/room", (req, res) => {
  
})

app.listen(3001)