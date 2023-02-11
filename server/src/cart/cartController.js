const Cart = require("./cartModel");

const createCart = async (req, res) => {
  try {
    const check = await Cart.findOne({ user: req.body.user }).exec();

    if (check) {
      return res.status(208).json({
        status: false,
        message: "This user already has a cart.",
      });
    }
    let newCart = new Cart({
      user: req.body.user,
    });
    // Save information
    const saveAccount = await newCart.save();

    if (saveAccount)
      return res.status(201).json({
        status: true,
        message: "Successfully created new cart",
      });
  } catch (error) {
    res.send(error);
  }
};

const addItem = async (req, res) => {
  try {
    // console.log(req.body.user);
    Cart.findOne({ user: req.user._id }).exec((error, cart) => {
      console.log("user not found");
      if (error) return res.status(400).json({ error });
      if (cart) {
        //if cart already exists then update cart by quantity
        let promiseArray = [];

        req.body.cartItems.forEach((cartItem) => {
          const product = cartItem.product;
          const item = cart.cartItems.find((c) => c.product == product);
          let condition, update;
          if (item) {
            condition = { user: req.user._id, "cartItems.product": product };
            update = {
              $set: {
                "cartItems.$": cartItem,
              },
            };
          } else {
            condition = { user: req.user._id };
            update = {
              $push: {
                cartItems: cartItem,
              },
            };
          }
          promiseArray.push(runUpdate(condition, update));
          //Cart.findOneAndUpdate(condition, update, { new: true }).exec();
          // .exec((error, _cart) => {
          //     if(error) return res.status(400).json({ error });
          //     if(_cart){
          //         //return res.status(201).json({ cart: _cart });
          //         updateCount++;
          //     }
          // })
        });
        Promise.all(promiseArray)
          .then((response) => res.status(201).json({ response }))
          .catch((error) => res.status(400).json({ error }));
      } else {
        //if cart not exist then create a new cart
        const cart = new Cart({
          user: req.user._id,
          cartItems: req.body.cartItems,
        });
        cart.save((error, cart) => {
          if (error) return res.status(400).json({ error });
          if (cart) {
            return res.status(201).json({ cart });
          }
        });
      }
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

// exports.addItemToCart = (req, res) => {
//   Cart.findOne({ user: req.user._id }).exec((error, cart) => {
//     if (error) return res.status(400).json({ error });
//     if (cart) {
//       //if cart already exists then update cart by quantity
//       let promiseArray = [];

//       req.body.cartItems.forEach((cartItem) => {
//         const product = cartItem.product;
//         const item = cart.cartItems.find((c) => c.product == product);
//         let condition, update;
//         if (item) {
//           condition = { user: req.user._id, "cartItems.product": product };
//           update = {
//             $set: {
//               "cartItems.$": cartItem,
//             },
//           };
//         } else {
//           condition = { user: req.user._id };
//           update = {
//             $push: {
//               cartItems: cartItem,
//             },
//           };
//         }
//         promiseArray.push(runUpdate(condition, update));
//         //Cart.findOneAndUpdate(condition, update, { new: true }).exec();
//         // .exec((error, _cart) => {
//         //     if(error) return res.status(400).json({ error });
//         //     if(_cart){
//         //         //return res.status(201).json({ cart: _cart });
//         //         updateCount++;
//         //     }
//         // })
//       });
//       Promise.all(promiseArray)
//         .then((response) => res.status(201).json({ response }))
//         .catch((error) => res.status(400).json({ error }));
//     } else {
//       //if cart not exist then create a new cart
//       const cart = new Cart({
//         user: req.user._id,
//         cartItems: req.body.cartItems,
//       });
//       cart.save((error, cart) => {
//         if (error) return res.status(400).json({ error });
//         if (cart) {
//           return res.status(201).json({ cart });
//         }
//       });
//     }
//   });
// };
const doNothing = async (req, res) => {
  res.send("Did nothing");
};

module.exports = {
  addItem,
  doNothing,
  createCart,
};
