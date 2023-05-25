import { ReactComponent as EditIcon } from "../assets/icons/edit-svgrepo-com.svg";
import { ReactComponent as DeleteIcon } from "../assets/icons/trash-svgrepo-com.svg";
import { ReactComponent as AddIcon } from "../assets/icons/plus-svgrepo-com.svg";

const switchImages = (name) => {
  switch (name) {
    case "edit":
      return <EditIcon />;

    case "delete":
      return <DeleteIcon />;

    case "add":
      return <AddIcon />;

    default:
      return <AddIcon />;
  }
};

export default switchImages;
