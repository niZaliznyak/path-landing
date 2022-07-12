import { WhyItem } from "./WhyItem";
import { ReactComponent as CaseIcon } from './icons/CaseIcon.svg';
import { ReactComponent as TalkIcon } from './icons/TalkIcon.svg';
import { Title } from "../../../ui/Title";


export const WhyCard = () => {
    return (
        <div className="flex flex-col items-center px-4">
            <Title className="text-32 mb-10 ml-2">Why Path</Title>
            <div className="md:flex md:space-x-4">
                <WhyItem
                    className="mb-6"
                    Icon={TalkIcon}
                    title="Just"
                    percent={39}
                    description="of referrals get an interview." />
                <WhyItem
                    Icon={CaseIcon}
                    title="Only"
                    percent={6}
                    description="of job applications by bootcampers get an interview." />
            </div>
        </div>
    )
};