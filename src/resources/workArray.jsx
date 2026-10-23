// I M P O R T

// Resources
import workRecord from '#resources/workRecord.jsx';

// E X P O R T

const workArray = ['rinkel', 'escience', 'guardian', 'eread', 'agrico', 'talkthick', 'pink', 'vocol', 'opa', 'noord', 'nova', 'jip', 'monster', 'pool', 'cloud', 'creamy', 'rabo', 'hoofd', 'traffic', 'year']
    .flatMap((key) => !workRecord[key] ? [] : {
        ...workRecord[key],
        id: key,
        route: `/work/${key}`
    });

export default workArray;