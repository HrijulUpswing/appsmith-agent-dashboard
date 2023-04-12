export default {
	onRowSelect: function() {
		keyValueState.setData(
			userSummary.data.withdrawalRequests.details[withdrawalRequestsTable.selectedRowIndex]
		);
	}
}