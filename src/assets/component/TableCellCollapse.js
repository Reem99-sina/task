import * as React from 'react';
import { Divider, Typography ,Box,Table,TableHead,TableBody} from "@mui/material"
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Collapse from '@mui/material/Collapse';
function TableCellCollapse({ row }) {
    const [open, setOpen] = React.useState(false);
    return (
      <>

        <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 }, my: "10px", backgroundColor: open?(theme)=>theme.palette.secondary.main:"#414040", height: "59px" ,borderRadius:"7.69px"}}
            onClick={()=>{setOpen(!open)}}
        >
            <TableCell component="th" scope="row" sx={{ borderBottom: "unset", color: (theme) => theme.palette.text.secondary }}>
                {row.name}
            </TableCell>
            <TableCell align="right" sx={{ borderBottom: "unset", color: (theme) => theme.palette.text.secondary }}>{row.calories}</TableCell>
            <TableCell align="right" sx={{ borderBottom: "unset", color: (theme) => theme.palette.text.secondary }}><Typography sx={{ borderLeft: "1px solid", px: "5px" }}>{row.fat}</Typography></TableCell>
            <TableCell align="right" sx={{ borderBottom: "unset", color: (theme) => theme.palette.text.secondary }}>{row.carbs}</TableCell>
            <TableCell align="right" sx={{ borderBottom: "unset", color: (theme) => theme.palette.text.secondary }}><Typography sx={{ borderLeft: "1px solid", px: "5px" }}>{row.protein}</Typography></TableCell>
            <TableCell align="right" sx={{ borderBottom: "unset", color: (theme) => theme.palette.text.secondary }}>{row.why}
            </TableCell>

            <TableCell align="right" sx={{ borderBottom: "unset", color: (theme) => theme.palette.text.secondary }}>
                <Typography sx={{ borderLeft: "1px solid", px: "5px" }}>{row.to}</Typography></TableCell>
            <TableCell align="right" sx={{ borderBottom: "unset", color: (theme) => theme.palette.text.secondary }}>{row.me}</TableCell>

        </TableRow>
        <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0,borderBottom:"unset" }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div"sx={{color:(theme)=>theme.palette.text.secondary}}>
                History
              </Typography>
              <Typography variant="p" gutterBottom component="div" sx={{color:(theme)=>theme.palette.text.secondary}}>
                        {row.data}
                        </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
        </>
    )
}
export default TableCellCollapse