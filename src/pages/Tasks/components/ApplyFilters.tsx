import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Modal from "../../../components/UI/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryFilter, setStatusFilter } from "../../../store/tasks";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const ApplyFilters: React.FC<Props> = ({ isOpen = false, setIsOpen }) => {
  const dispatch = useDispatch();
  const { filters } = useSelector((state: any) => state.tasks);
  const handleCategoryChange = (event: any) => {
    dispatch(setCategoryFilter(event.target.value));
  };

  const handleStatusChange = (event: any) => {
    dispatch(setStatusFilter(event.target.value));
  };

  return (
    <Modal
      show={isOpen}
      title="Select Filters"
      closeModal={() => setIsOpen(false)}
    >
      <div className="flex flex-col gap-2">
        <FormControl fullWidth variant="outlined">
          <InputLabel id="select-category">Category</InputLabel>
          <Select
            id="select-box-category"
            labelId="select-category"
            value={filters.category || ""}
            onChange={(event) => handleCategoryChange(event)}
            label="Category"
          >
            <MenuItem value="Work">Work</MenuItem>
            <MenuItem value="Personal">Personal</MenuItem>
            <MenuItem value="Urgent">Urgent</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth variant="outlined">
          <InputLabel id="select-status">Status</InputLabel>
          <Select
            id="select-box-status"
            labelId="select-status"
            value={filters.status || ""}
            onChange={(event) => handleStatusChange(event)}
            label="Status"
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
            <MenuItem value="incomplete">Incomplete</MenuItem>
          </Select>
        </FormControl>
      </div>
    </Modal>
  );
};

export default ApplyFilters;
