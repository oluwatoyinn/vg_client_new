import React, { useEffect } from "react";
import Data from "../utils/Data";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto pb-6">
      <div className="md:flex flex-row">
        {Data.contactUsData.map((address) => {
          return (
            <div className="container md:flex flex-col space-y-3 mx-auto w-80 h-80 bg-red-400">
              <div className="flex flex-col mx-auto px-6 py-6">
                <span className="mx-auto text-white">{address.icon}</span>
                <h3 className="mx-auto font-bold uppercase py-8 text-white">
                  {address.title}
                </h3>
                <p className="text-center text-base text-white">
                  {address.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col mx-auto w-3/4 bg-red-300 h-auto -mt-16 rounded-md space-y-5 pb-10">
        <div className="py-28 mx-auto">
          <h3 className="md:text-5xl font-bold text-white text-3xl"> Contact Us</h3>
        </div>
        <div className="w-3/4 mx-auto">
          <Grid container spacing={2}>
            <Grid item sm={6}>
              <TextField
                id="outlined-basic"
                label="Full Name"
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                id="filled-basic"
                variant="standard"
                label="Email"
                fullWidth
              />
            </Grid>
            <Grid item sm={12}>
              <TextField
                id="standard-multiline-static"
                label="Company Name "
                multiline
                rows={2}
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item sm={12}>
              <TextField
                id="standard-multiline-static"
                label="Message "
                multiline
                rows={4}
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item sm={6}>
              <Button
                variant="outlined"
                color="secondary"
                style={{ marginTop: "15px" }}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
