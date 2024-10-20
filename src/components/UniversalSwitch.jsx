import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import Counter from '../components/counter/Counter';
import ShiftingBox from '../components/shiftingbox/ShiftingBox';
import Dialogue from '../components/dialogue/Dialogue';
import GoalStrip from '../components/game/game_mats';


/* Map  */
const componentMapping = {
    COUNTER: Counter,
    SHIFTING_BOX: ShiftingBox,
    DIALOGUE: Dialogue,
    GOAL_STRIP: GoalStrip,
};

const UniversalSwitch = () => {
    const activeComponents = useSelector((state) => state.universalSwitch);

    if (activeComponents.length === 0) return null;

    /* Group components by portalRoot */
    const componentsByPortalRoot = activeComponents.reduce((acc, component) => {
        if (!acc[component.portalRoot]) {
            acc[component.portalRoot] =[];
        }
        acc[component.portalRoot].push(component);
        return acc;
    }, {});

    /* For each portal root, render the components into it */
    return Object.entries(componentsByPortalRoot).map(([portalRoot, components]) => {
        const portalRootElement = document.getElementById(portalRoot);
        if(!portalRootElement) return null;

        return ReactDOM.createPortal(
            components.map((component) => {
                const SpecificComponent = componentMapping[component.type];
                return SpecificComponent ? (
                    <SpecificComponent key={component.id} id={component.id} {...component.props} />
                ) : null;
            }),
            portalRootElement
        );
    });
};

export default UniversalSwitch;
