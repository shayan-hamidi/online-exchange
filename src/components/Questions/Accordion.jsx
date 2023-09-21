import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid } from "@mui/material";

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
        expanded={data?.expanded}
      >
        <AccordionSummary expandIcon={data?.expandIcon || <ExpandMoreIcon />}>
          <Grid container>
            <Grid
              item
              xs={12}
              display={"flex"}
              columnGap={"3px"}
              sx={{
                svg: {
                  color: "#1D5D9B",
                },
              }}
            >
              {data?.titleIcon}
              <Typography
                sx={{ color: "#1D5D9B", fontWeight: "bold", display: "block" }}
              >
                {data?.summary}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ color: "#9e9ba1" }} variant="caption">
                {data?.summarySub}
              </Typography>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: "#33BBC5" }} fontSize={"13px"}>
            {data?.details}
          </Typography>
        </AccordionDetails>
      </Accordion>
    );
  });
}
