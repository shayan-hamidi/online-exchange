import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function StyledAccordion({ accordionList }) {
  return accordionList.map((data) => {
    return (
      <Accordion
        sx={{
          background: "#CDEBFF",
          "&.Mui-expanded": {
            margin: "10px 0px",
          },
        }}
        key={accordionList.summary}
        TransitionProps={{ unmountOnExit: true }}
        expanded={data.expanded}
      >
        <AccordionSummary expandIcon={data.expandIcon || <ExpandMoreIcon />}>
          <Typography sx={{ color: "#1D5D9B", fontWeight: "bold" }}>
            {data.summary}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: "#33BBC5" }}>{data.details}</Typography>
        </AccordionDetails>
      </Accordion>
    );
  });
}
