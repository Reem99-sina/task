import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { Divider, Typography,Box } from "@mui/material"
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import SsidChartIcon from '@mui/icons-material/SsidChart'; import MoneyIcon from '@mui/icons-material/Money';
import TableCellCollapse  from './TableCellCollapse';
function Tablebody() {

    function createData(name, calories, fat, carbs, protein, why, to, me,data) {
        return { name, calories, fat, carbs, protein, why, to, me ,data};
    }
    const rows = [
        createData(<LocalAtmIcon />, `Frozen yoghurt`, <TextSnippetIcon />, 159, <SsidChartIcon />, 6.0, <MoneyIcon />, 24,"Another limitation that should be made explicit is that virtually all material to be presented has been drawn from studies of various subgroups of the population of the United States. No attention will be given to the contributions accruing from studies of other cultures."),
        createData(<LocalAtmIcon />, `Frozen yoghurt`, <TextSnippetIcon />, 159, <SsidChartIcon />, 6.0, <MoneyIcon />, 24,"Another limitation that should be made explicit is that virtually all material to be presented has been drawn from studies of various subgroups of the population of the United States. No attention will be given to the contributions accruing from studies of other cultures."),
        createData(<LocalAtmIcon />, `Frozen yoghurt`, <TextSnippetIcon />, 159, <SsidChartIcon />, 6.0, <MoneyIcon />, 24,"Another limitation that should be made explicit is that virtually all material to be presented has been drawn from studies of various subgroups of the population of the United States. No attention will be given to the contributions accruing from studies of other cultures."),
        createData(<LocalAtmIcon />, `Frozen yoghurt`, <TextSnippetIcon />, 159, <SsidChartIcon />, 6.0, <MoneyIcon />, 24,"Another limitation that should be made explicit is that virtually all material to be presented has been drawn from studies of various subgroups of the population of the United States. No attention will be given to the contributions accruing from studies of other cultures."),
        createData(<LocalAtmIcon />, `Frozen yoghurt`, <TextSnippetIcon />, 159, <SsidChartIcon />, 6.0, <MoneyIcon />, 24,"Another limitation that should be made explicit is that virtually all material to be presented has been drawn from studies of various subgroups of the population of the United States. No attention will be given to the contributions accruing from studies of other cultures."),
        createData(<LocalAtmIcon />, `Frozen yoghurt`, <TextSnippetIcon />, 159, <SsidChartIcon />, 6.0, <MoneyIcon />, 24,"Another limitation that should be made explicit is that virtually all material to be presented has been drawn from studies of various subgroups of the population of the United States. No attention will be given to the contributions accruing from studies of other cultures."),
        createData(<LocalAtmIcon />, `Frozen yoghurt`, <TextSnippetIcon />, 159, <SsidChartIcon />, 6.0, <MoneyIcon />, 24,"Another limitation that should be made explicit is that virtually all material to be presented has been drawn from studies of various subgroups of the population of the United States. No attention will be given to the contributions accruing from studies of other cultures."),
        createData(<LocalAtmIcon />, `Frozen yoghurt`, <TextSnippetIcon />, 159, <SsidChartIcon />, 6.0, <MoneyIcon />, 24,"Another limitation that should be made explicit is that virtually all material to be presented has been drawn from studies of various subgroups of the population of the United States. No attention will be given to the contributions accruing from studies of other cultures."),
        createData(<LocalAtmIcon />, `Frozen yoghurt`, <TextSnippetIcon />, 159, <SsidChartIcon />, 6.0, <MoneyIcon />, 24,"Another limitation that should be made explicit is that virtually all material to be presented has been drawn from studies of various subgroups of the population of the United States. No attention will be given to the contributions accruing from studies of other cultures."),
        createData(<LocalAtmIcon />, `Frozen yoghurt`, <TextSnippetIcon />, 159, <SsidChartIcon />, 6.0, <MoneyIcon />, 24,"Another limitation that should be made explicit is that virtually all material to be presented has been drawn from studies of various subgroups of the population of the United States. No attention will be given to the contributions accruing from studies of other cultures."),
        createData(<LocalAtmIcon />, `Frozen yoghurt`, <TextSnippetIcon />, 159, <SsidChartIcon />, 6.0, <MoneyIcon />, 24,"Another limitation that should be made explicit is that virtually all material to be presented has been drawn from studies of various subgroups of the population of the United States. No attention will be given to the contributions accruing from studies of other cultures."),
        createData(<LocalAtmIcon />, `Frozen yoghurt`, <TextSnippetIcon />, 159, <SsidChartIcon />, 6.0, <MoneyIcon />, 24,"Another limitation that should be made explicit is that virtually all material to be presented has been drawn from studies of various subgroups of the population of the United States. No attention will be given to the contributions accruing from studies of other cultures."),
        createData(<LocalAtmIcon />, `Frozen yoghurt`, <TextSnippetIcon />, 159, <SsidChartIcon />, 6.0, <MoneyIcon />, 24,"Another limitation that should be made explicit is that virtually all material to be presented has been drawn from studies of various subgroups of the population of the United States. No attention will be given to the contributions accruing from studies of other cultures."),
        createData(<LocalAtmIcon />, `Frozen yoghurt`, <TextSnippetIcon />, 159, <SsidChartIcon />, 6.0, <MoneyIcon />, 24,"Another limitation that should be made explicit is that virtually all material to be presented has been drawn from studies of various subgroups of the population of the United States. No attention will be given to the contributions accruing from studies of other cultures."),
        createData(<LocalAtmIcon />, `Frozen yoghurt`, <TextSnippetIcon />, 159, <SsidChartIcon />, 6.0, <MoneyIcon />, 24,"Another limitation that should be made explicit is that virtually all material to be presented has been drawn from studies of various subgroups of the population of the United States. No attention will be given to the contributions accruing from studies of other cultures."),
        createData(<LocalAtmIcon />, `Frozen yoghurt`, <TextSnippetIcon />, 159, <SsidChartIcon />, 6.0, <MoneyIcon />, 24,"Another limitation that should be made explicit is that virtually all material to be presented has been drawn from studies of various subgroups of the population of the United States. No attention will be given to the contributions accruing from studies of other cultures."),
        createData(<LocalAtmIcon />, `Frozen yoghurt`, <TextSnippetIcon />, 159, <SsidChartIcon />, 6.0, <MoneyIcon />, 24,"Another limitation that should be made explicit is that virtually all material to be presented has been drawn from studies of various subgroups of the population of the United States. No attention will be given to the contributions accruing from studies of other cultures."),

    ];
    return (
        <Box sx={{overflow:"auto",    width: "100%",
        height: "100vh"}}>
        <Table sx={{ backgroundColor: "##414040b5", width: "100%" }} stickyHeader aria-label="sticky table">
            <TableBody sx={{ display: "flex", flexDirection: "column" }}>
                {rows.map((row) => (
                   <TableCellCollapse row={row}/>
                ))}
            </TableBody>
        </Table></Box>)
}
export default Tablebody