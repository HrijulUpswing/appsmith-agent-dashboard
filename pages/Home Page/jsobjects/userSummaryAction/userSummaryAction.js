export default {
	onSuccess: function() {
		clearStore();
		storeValue('lastSearchedParameters', userSummaryForm.formData, false);
	}
}