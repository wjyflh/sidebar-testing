import styled from 'styled-components'



const IconStyle = styled.i`
    font-size: 30px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Icon = ({...props}) => {

    const { iconName } = props
    return (
        <IconStyle className={`icon icofont-${iconName}`}></IconStyle>
    )
}
export default Icon