import React from "react";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
import Data from "../utils/Data";

const Schedule = () => {
  return (
    <div className="container mx-auto md:px-28">
      <h4 className="font-bold text-5xl uppercase text-center mt-10 mb-2 dark:text-gray-500">
        Schedule an Appointment
      </h4>
      <p className="text-center dark:text-gray-500">
        We are always available for you
      </p>
      <div className="flex flex-row mx-auto mt-6 gap-10 ml-4 mr-4">
        <div className="basis-1/2">
          <h3 className="uppercase w-full border-b-2 border-red-500 space-x-7 mb-4 text-2xl font-bold text-gray-500 dark:text-gray-500 ">
            Our Services
          </h3>
          <p className="text-base mb-6 text-gray-500 text-justify md:text-base">
            We have proven a multiplier effect from optimizing the sum of the
            parts, not just the individual pieces. We bring deep, handy
            expertise, but are known for our all-inclusive perception: we
            capture value across boundaries and between the silos of any
            organization.
          </p>
          <p className="text-base mb-6 text-gray-500 text-justify md:text-base">
            We have immense and extensive experiences:
          </p>
          <div>
            {Data.services.map((schedule) => {
              return (
                <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row pb-4">
                  <div className="rounded-l-full bg-red-200 md:bg-transparent">
                    <div className="flex items-center space-x-2">
                      <div className="px-4 py-2 text-white rounded-full md:py-1 bg-red-500">
                        {schedule.id}
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-500 max-w-md">{schedule.message}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-red-300 p-5 mb-5 rounded-l-lg mx-auto basis-1/2 md:text-gray-500">
          <Grid container spacing={2}>
            <Grid item sm={12}>
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item sm={12}>
              <TextField
                id="filled-basic"
                variant="standard"
                label="Last Name"
                fullWidth
              />
            </Grid>
            <Grid item sm={12}>
              <TextField
                id="filled-basic"
                variant="standard"
                label="Email"
                fullWidth
              />
            </Grid>
            <Grid item sm={12}>
              <TextField
                id="filled-basic"
                variant="standard"
                label="Phone Number"
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

export default Schedule;
