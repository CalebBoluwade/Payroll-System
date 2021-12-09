import React, {useState} from 'react'
import { PersonAddOutlined } from '@material-ui/icons';
import { TextField } from '@material-ui/core';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";

const AddEmployee = () => {
    const [userEmail, setUserEmail] = useState();
    const [openPopup, setOpenPopup] = useState(false);

    return (
        <>
        <Dialog open={openPopup} onClose={() => setOpenPopup(false)}>
        <div id="addemployeeform">
            <DialogTitle>
        <PersonAddOutlined fontSize="large" />
        </DialogTitle>

<DialogContent>
        <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                placeholder="Email"
                label="Email Address"
                name="email"
                onChange={(e) => setUserEmail(e.target.value)}
              />
              </DialogContent>
        </div>
        </Dialog>
        </>
    )
}

export default AddEmployee;
