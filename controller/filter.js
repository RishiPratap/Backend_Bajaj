const filter = async (req, res) => {
  try {
    const val = req.body.data || []; 

    const response = {
      is_success: true,
      user_id: "Rishi Pratap",
      email: "rp0258@srmist.edu.in",
      roll_number: "RA2011029010034",
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
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  filter
};
