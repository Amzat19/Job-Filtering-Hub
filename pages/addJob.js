import AddNewJob from "../components/AddNewJob";

export default function addJob() {
    return (
        <>
        <Head>
            <title>Add New Job</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content='A Nextjs website built to show available job listings with filter functionality' />
            <meta name="robots" content="index, nofollow"/>
            <meta name="viewport" content='width=device-width, initial-scale=1'/>
            </Head>
        <AddNewJob/>
        </>
        
    )
}