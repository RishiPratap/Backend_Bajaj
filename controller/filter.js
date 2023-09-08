const filter = async (req, res) => {
    const val = req.body.data || []; // Default to an empty array if 'data' is missing in the request
  
    const response = {
      is_success: true,
      user_id: "john_doe_17091999",
      email: "john@xyz.com",
      roll_number: "ABCD123",
      numbers: val.filter(item => !isNaN(item)),
      alphabets: val.filter(item => typeof item === "string" && /^[A-Za-z]$/.test(item)),
      highest_alphabet: val.reduce((highest, item) => {
        if (
          typeof item === "string" &&
          /^[A-Za-z]$/.test(item) &&
          (item.toUpperCase() > (highest[0] || "").toUpperCase())
        ) {
          return [item];
        }
        return highest;
      }, [])
    };
  
    console.log(response);
    res.send(response);
  };
  
  module.exports = {
    filter
  };
  