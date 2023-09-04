import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

export default function HomeBody() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {/* Nome do paciente */}
            Jandilson
          </Typography>
          <Typography variant="body2" color="green">
            {/* Ficha de Documentos */}
            20211tadst2222
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
