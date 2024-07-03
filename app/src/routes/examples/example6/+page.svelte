<div> 
    <p>Input ProjectID <input type="text" id="projectID" class="projectID" bind:value={projectID} on:keydown={() => dummyApiCall}/>
    </p> </div>

<script lang="ts">
import data from '../../../data/jobs.json';
import PowerTable from '$lib/components/PowerTable.svelte';
import type {Instructs, Options, DataFeed} from '$lib/components/PowerTable.svelte';
let projectID = '63ebe69c-1c5c-47b1-88a7-57bf7d8ceeed';

projectID = localStorage.getItem('projectID') || 'f82e1e64-9f87-48ed-96b2-3d6bae24fd8c'
function showName() {
    console.log(projectID);
}

let ptInstructs: Instructs[] = [
    {key: 'unique_id', title: 'ID', sortable: false, filterable: false},
    {key: 'description', title: 'description', sortable: false, filterable: false},
    {key: 'plan_progress_itd', title: 'Plan Progress', sortable: false, filterable: false},
    {key: 'actual_progress_itd', title: 'Actual Progress', sortable: false, filterable: false},
    {key: 'start_date', title: 'Start Date', sortable: false, filterable: false},
    {key: 'end_date', title: 'End Date', sortable: false, filterable: false},
    {key: 'predecessor', title: 'predecessors', sortable: false, filterable: false},
    {key: 'successor', title: 'successors', sortable: false, filterable: false},
    {key: 'etc', title: 'etc', sortable: false, filterable: false},
    {key: 'etc_duration', title: 'etc duration', sortable: false, filterable: false},
    {key: 'is_estimated_completion', title: 'Estimate Complete', sortable: false, filterable: false},
    {key: 'is_critical_path', title: 'Critical', sortable: false, filterable: false}
];

let ptOptions: Options = {
    isDataRemote: true,
    userFunctions: {
        dataFeed: dummyApiCall,
    },
    segments: {
        'topBar': ['stats', 'pagination'],
        'pTable': ['table']
    }, 
    rowsPerPageOptions: [10, 100, 200],
    footerText: false,
    footerFilters: false,
}

// This function simulates the minimal server side operations (without filtering, searching, or sorting features)
async function dummyApiCall({filters, options, search, sorting}: Record<string,any>): Promise<DataFeed> {
    console.log('filters', filters);
    console.log('options', options);
    console.log('search', search);
    console.log('sorting', sorting);
    console.log('----------------');
    let dataCopy = JSON.parse(JSON.stringify(data));
    let apiUrl = 'http://localhost:8002/api/v1/projects/tasks?page=1&page_size=25&project_id=' + projectID;
    console.log('dataCopy', projectID);
    // Construct the full URL with query parameters
    const fullUrl = `${apiUrl}`;
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NfdXVpZCI6IjU0NDc0NTk2LWNhYmItNGMzMS05M2M5LTljZWZlZjU1ZGQyMCIsImF1dGhvcml6ZWQiOnRydWUsImV4cCI6MTcyMDAzNzU0NCwidXNlcl9pZCI6ImFkMzg1NGQ2LThjMDItNDg4Ni04ZjgwLTI4ZTMzYjc0MGYxNiJ9.Ka2BaJpwbEKKHhtwBnyC-lR0-8RGbkgi1S_2i7xHZJY';
    let headers = {headers: {'Authorization': 'Bearer ' + token}};
    // Make the API call
    try {
        const response = await fetch(fullUrl, headers);
        if (!response.ok) throw new Error('Network response was not ok');
        dataCopy = await response.json();
    
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Rethrow or handle as needed
    }
    // let totalRows = dataCopy.length;
    // let selectedPage = options.currentPage;
    // let rowsPerPage = options.rowsPerPage;

    // let totalPages = Math.ceil(totalRows / rowsPerPage);
    // let firstRow = (selectedPage - 1) * rowsPerPage;
    // let lastRow = firstRow + rowsPerPage - 1;
    
    // if (lastRow > totalRows) {
    //     lastRow = totalRows;
    // }

    // options.totalRows = totalRows;
    // options.totalPages = totalPages;
    // options.filteredRows = totalRows;
    dataCopy.data.list.forEach(element => {
        element.predecessors.forEach((predecessor) => {
            console.log(predecessor)
            element['predecessor'] = predecessor.uniqueID+':'+predecessor.type+'+'+predecessor.lag;
        });
        element.successors.forEach((successor) => {
            console.log(successor)
            element['successor'] = successor.uniqueID+':'+successor.type+'+'+successor.lag;
        });
    });
    return {
        instructs: ptInstructs,
        options: options,
        data: dataCopy.data.list
    }
}
</script>


<PowerTable {ptOptions} {ptInstructs} />
