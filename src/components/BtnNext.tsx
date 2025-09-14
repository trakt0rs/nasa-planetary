import { Button } from "@mui/material";

interface BtnNextProps {
    onClick: () => void;
}

export default function BtnNext({onClick}: BtnNextProps) {
    return (
        <Button
            onClick={onClick}
            variant="outlined"
            sx={{paddingX: 4, color: "white", borderColor: "white", alignSelf: "flex-start",
                "&:hover": {
                bgcolor: "white",
                color: "black",
                }
            }}>
            NEXT
        </Button>
    )
}