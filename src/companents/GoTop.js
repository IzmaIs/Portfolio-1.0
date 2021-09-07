import React, {Fragment} from 'react';
import Button from '@material-ui/core/Button';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

export const GoTop = (props) => {
    const [thePosition, setThePosition] = React.useState(false);
    const timeoutRef = React.useRef(null);
    React.useEffect(() => {
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                setThePosition(true)
            } else {
                setThePosition(false);
            }
        });
        // window.scrollTo(0, 0);
    }, [])
    const onScrollStep = () => {
        if (window.pageYOffset === 0) {
            clearInterval(timeoutRef.current);
        }
        window.scroll(0, window.pageYOffset - props.scrollStepInPx);
    }

    const scrollToTop = () => {
        timeoutRef.current = setInterval(onScrollStep, props.delayInMs);
    }
    const renderGoTopIcon = () => {
        return (
            <Button size="large" className={`go-top ${thePosition ? 'active' : ''}`} onClick={scrollToTop}>{
                <ArrowUpwardIcon fontSize="large"/>}
            </Button>
        )
    }
    return (
        <Fragment>
            {renderGoTopIcon()}
        </Fragment>
    )
}
export default GoTop;
