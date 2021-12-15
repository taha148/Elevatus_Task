import { Chip, Stack } from "@mui/material"

const langLevel = (level) => {
    if (level > 0 && level <= 3) {
        return "Beginner"
    } else if (level > 3 && level <= 5) {
        return "Intermediate"
    } else if (level > 5) {
        return "Professional"
    }
}

const ChipCircle = ({ skills = [], languages = [] }) => {
    return (
        <Stack marginBottom={"1%"} direction="row" flexWrap="wrap" spacing={1}>
            {skills?.map(skill => <Chip sx={{margin:".1rem !important"}} label={skill} key={skill} />)}
            {languages?.map(lang => {
                let langKey = Object.keys(lang)?.[0]
                return <Chip sx={{margin:".1rem !important"}}  label={`${langKey} - ${langLevel(lang[langKey])}`} key={langKey} />
            })}
        </Stack>

    )
}

export default ChipCircle