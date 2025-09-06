import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },

  // 🔍 Search Section
  searchGroup: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: "#fff",
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: 10,
    overflow: "hidden",
  },
  searchControlGroup: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  searchFormText: {
    fontSize: 14,
    color: "#7E7B7B",
  },
  searchControl: {
    fontSize: 16,
    color: "#0D0D0D",
  },
  searchButton: {
    backgroundColor: "#34967C",
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  // 🏷️ Filters
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 20,
  },
  filterContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    marginRight: 16,
  },

  // 📃 Listings
  listingContainer: {
    paddingHorizontal: 20,
    marginTop: 16,
  },
  paginationContainer: {
    marginTop: 20,
    marginBottom: 30,
    alignItems: "center",
  },
  showMoreButton: {
    backgroundColor: "#E6E6E6",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  showMoreButtonText: {
    fontSize: 16,
    color: "#0D0D0D",
    fontWeight: "500",
  },
});

export { styles };
