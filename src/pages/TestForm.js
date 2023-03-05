// import React, { useState, useRef } from "react";
// import {
//   FormControl,
//   Grid,
//   InputLabel,
//   MenuItem,
//   Select,
//   Button,
//   TextField,
// } from "@mui/material";
// import Data from "../utils/Data";
// import emailjs from '@emailjs/browser'


// // npm i @emailjs/browser

// const TestForm = () => {
//     const form = useRef();
//   const [inputs, setInputs] = useState({});

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setInputs((values) => ({ ...values, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_qmj8twx', 'template_6quwc97', form.current, 'TFzu2V_nXlY98a8NX')
//     .then((result) => {
//         console.log(result.text);
//     }, (error) => {
//         console.log(error.text);
//     });


//     setInputs({});
//   };

//   const { name, email, company, message, phoneNumber, service } = inputs;

//   return (
//     <div className="container mx-auto md:px-28 w-1/2 mt-12">
//       <div className="bg-red-300 p-5 mb-5 rounded-l-lg mx-auto basis-1/2 md:text-gray-500">
//         <form ref={form} onSubmit={handleSubmit}>
//           <Grid container spacing={2}>
//             <Grid item sm={12}>
//               <TextField
//                 name="name"
//                 value={name}
//                 onChange={handleInputChange}
//                 id="outlined-basic"
//                 label="Name"
//                 variant="standard"
//                 fullWidth
//               />
//             </Grid>
//             <Grid item sm={12}>
//               <TextField
//                 value={email}
//                 onChange={handleInputChange}
//                 name="email"
//                 id="filled-basic"
//                 variant="standard"
//                 label="Email"
//                 fullWidth
//               />
//             </Grid>
//             <Grid item sm={12}>
//               <TextField
//                 value={phoneNumber}
//                 onChange={handleInputChange}
//                 name="phoneNumber"
//                 id="filled-basic"
//                 variant="standard"
//                 label="Phone Number"
//                 fullWidth
//               />
//             </Grid>
//             <Grid item sm={12}>
//               <TextField
//                 value={company}
//                 onChange={handleInputChange}
//                 name="company"
//                 id="standard-multiline-static"
//                 label="Company Name "
//                 multiline
//                 rows={2}
//                 variant="standard"
//                 fullWidth
//               />
//             </Grid>
//             <Grid item sm={12}>
//               <FormControl fullWidth>
//                 <InputLabel id="demo-simple-select-label">
//                   Service Required
//                 </InputLabel>
//                 <Select
//                   name="serviceNeeded"
//                   labelId="demo-simple-select-label"
//                   id="demo-simple-select"
//                   value={service}
//                   label="Service Required"
//                   onChange={handleInputChange}
//                   variant="standard"
//                 >
//                   {Data.servicesMenu.map((item) => {
//                     return (
//                       <MenuItem key={item.id} value={item.value}>
//                         {item.label}
//                       </MenuItem>
//                     );
//                   })}
//                 </Select>
//               </FormControl>
//             </Grid>
//             <Grid item sm={12}>
//               <TextField
//                 value={message}
//                 onChange={handleInputChange}
//                 name="message"
//                 id="standard-multiline-static"
//                 label="Message "
//                 multiline
//                 rows={4}
//                 variant="standard"
//                 fullWidth
//               />
//             </Grid>
//             <Grid item sm={6}>
//               <Button
//                 variant="outlined"
//                 color="secondary"
//                 style={{ marginTop: "15px" }}
//                 type="submit"
//                 onClick={handleSubmit}
//               >
//                 Send Message
//               </Button>
//             </Grid>
//           </Grid>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default TestForm;
