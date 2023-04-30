import React from "react"
import {
    Stack,
    Typography,
    Box,
    Modal,
    Button,
    Card,
    CardContent,
    CardActions
} from "@mui/material"
import { plansConfig } from '../../configs/plans.config';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "#bebebee4",
    boxShadow: 24,
    p: 4,
    border: 'none',
    borderRadius: 2,
    display: "flex",
    outline: 'none'
}

export interface planProps {
    setPlan: Function,
    open: boolean,
    setOpen: Function
}

const PlanModal = ({ setPlan, open, setOpen }: planProps) => {

    const handleClose = () => setOpen(false)
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                {
                    Object.keys(plansConfig).map((ele, id) =>
                        <Card sx={{ minWidth: 275, margin: 2 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14, color: 'blueviolet' }} color="text.primary" gutterBottom>
                                    Plan
                                </Typography>
                                <Typography variant="h5" component="div">
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    {ele}
                                </Typography>
                                <Typography variant="body2">
                                    {plansConfig[ele].role.map(ele => ele + " ")}
                                </Typography>
                                <Typography variant="h5" component="div" />
                                <Typography variant="body2">
                                    ${plansConfig[ele].price.usd}<br />
                                    €{plansConfig[ele].price.eur}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => { setPlan(ele), handleClose() }}>{ele}</Button>
                            </CardActions>
                        </Card>
                    )
                }


                {/*// direction="row"*/}
                {/* <Stack direction="row" mt={2}>
                    <Button
                        variant="outlined"
                        aria-label="cancel"
                        // style={{ marginLeft: "auto" }}
                        onClick={() => handleClose()}
                    >
                        Cancel
                    </Button>

                    <Button
                        variant="contained"
                        aria-label="yes"
                        style={{ marginLeft: "auto" }}
                        // style={{ marginLeft: "auto", marginRight: "10px" }}
                        onClick={(e) => handleDeleteClick(e, link.id)}
                    >
                        YES
                    </Button>

                </Stack> */}
            </Box>
        </Modal>
    )
}

export default PlanModal
