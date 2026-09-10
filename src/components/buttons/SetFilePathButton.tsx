import getFilePath from "../../hooks/FileIO/getFilePath.ts";
import { IconButton } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';

export default function DownloadButton() {
    const getPath = getFilePath();

    return (
        <IconButton
            aria-label={"Download Path"}
            onClick={() => getPath()}
        >
            <SaveIcon />
        </IconButton>
    );
}