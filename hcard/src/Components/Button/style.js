 export default function getStyle(style) {

    switch (style) {
        case 'primary':
            return {
                lineHeight:'16px',
                textTransform:'none',
                fontSize:'14px',
                boxShadow:"none",
                padding:'8px 24px 8px 24px',
                color:  'white',
                backgroundColor: '#2c8ed5',
                '&:hover': {
                    backgroundColor:'#7AC0F8',
                }
            }
        case 'secondary':
            return {
                textTransform:'none',
                lineHeight:'16px',
                fontSize:'14px',
                boxShadow:"none",
                padding:'8px 24px 8px 24px',
                color:  'white',
                backgroundColor: '#58707f',
                '&:hover': {
                    backgroundColor:'#9aa9b2',
                }
            }
        default:
            return{}

    }
}