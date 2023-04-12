export default {
	getData: function() {
		return appsmith.store.keyValueData;
	},
	setData: function(dataToSet) {
		const transformedArray = [];
		for (const key of Object.keys(dataToSet)) {
			transformedArray.push({key, value: dataToSet[key]});
		}
		storeValue("keyValueData", transformedArray, false);
	}
}