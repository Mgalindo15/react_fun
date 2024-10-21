import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import Counter from './main/Counter';
import ShiftingBox from './main/ShiftingBox';
import Dialogue from './dialogues/Dialogue_Container';
import GoalStrip from './game/materials';
import StopWatch from './game/widgets';


/* Map, type: component  */
const componentMapping = {
    COUNTER: Counter,
    SHIFTING_BOX: ShiftingBox,
    DIALOGUE: Dialogue,
    GOAL_STRIP: GoalStrip,
    STOP_WATCH: StopWatch,
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
