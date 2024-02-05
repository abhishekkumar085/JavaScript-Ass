function calculateDeliveryTime(packageType) {
    let deliveryTime;
  
    switch (packageType.toLowerCase()) {
      case "standard":
        deliveryTime = "3-5 days";
        break;
      case "express":
        deliveryTime = "1-2 days";
        break;
      case "overnight":
        deliveryTime = "Next day";
        break;
      default:
        deliveryTime = "Unknown";
        break;
    }
  
    console.log(`Estimated delivery time for ${packageType} package: ${deliveryTime}`);
  }
  
  // Test the function with different package types
  calculateDeliveryTime("standard");
  calculateDeliveryTime("express");
  calculateDeliveryTime("overnight");
  calculateDeliveryTime("unknown");
  