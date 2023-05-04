import db from "./index"

/*
 * This seed function is executed when you run `blitz db seed`.
 *
 * Probably you want to use a library like https://chancejs.com
 * to easily generate realistic data.
 */
const seed = async () => {
  for (let i = 0; i < 5; i++) {
    // await db.user.create({ data: { name: "Project " + i } })
    // await db.user.create({ data: { name: "Project " + i } })


    const user = await db.user.create({
      data: { username: "tester", email: "tester@gmail.com", hashedPassword: "JGFyZ29uMmlkJHY9MTkkbT02NTUzNix0PTIscD0xJDJONlZ0RWs3RXBaRFFzOWJYWFk5dHckTnBkU3dBb1dHMEptWDZFU3RucW9VQ2FUMVdJL3RoMldVb1RCbnZuUjZvZwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", role: "USER" },
    })
  }





}

export default seed
