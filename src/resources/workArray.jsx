// I M P O R T

// Resources
import workStore from '#resources/workStore';

// E X P O R T

const workArray = ['rinkel', 'escience', 'guardian', 'eread', 'agrico', 'talkthick', 'pink', 'vocol', 'opa', 'noord', 'nova', 'jip', 'monster', 'pool', 'cloud', 'creamy', 'rabo', 'hoofd', 'traffic', 'year']
    .flatMap((id) => !workStore[id] ? [] : { id, ...workStore[id] });
    
export default workArray;