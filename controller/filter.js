const filter = async (req, res) => {
    const val = req.body.data;
  
    if (Array.isArray(val)) {
      const response = {
        is_success: true,
        user_id: "john_doe_17091999",
        email: "john@xyz.com",
        roll_number: "ABCD123",
        numbers: [],
        alphabets: [],
        highest_alphabet: []
      };
  
      val.forEach(item => {
        if (typeof item === "string" && /^[A-Za-z]$/.test(item)) {
          response.alphabets.push(item);
          if (item.toUpperCase() > (response.highest_alphabet[0] || "").toUpperCase()) {
            response.highest_alphabet = [item];
          } else if (item.toUpperCase() === (response.highest_alphabet[0] || "").toUpperCase()) {
            response.highest_alphabet.push(item);
          }
        } else if (!isNaN(item)) {
          response.numbers.push(item);
        }
      });
  
      console.log(response);
      res.send(response);
    } else {
      // Handle the case where 'data' is not an array
      res.status(400).send({ error: "Invalid data format" });
    }
  };
  
  module.exports = {
    filter
  };
  