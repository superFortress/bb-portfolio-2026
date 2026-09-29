// I M P O R T

// Resources
import workStore from '#resources/workStore';

// E X P O R T

const workArray = ['rinkel', 'escience', 'guardian', 'eread', 'agrico', 'talkthick', 'pink', 'vocol', 'opa', 'noord', 'nova', 'jip', 'monster', 'pool', 'cloud', 'creamy', 'rabo', 'hoofd', 'traffic', 'year']
    .flatMap((key) => !workStore[key] ? [] : {
        ...workStore[key],
        id: key,
        route: `/work/${key}`
    });

export default workArray;