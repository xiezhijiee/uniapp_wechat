{\rtf1}

     const pages = getCurrentPages();
      const prevPage = pages[pages.length - 2];
      uni.navigateBack({
        delta: 1,
        success: () => {
          if (typeof prevPage.$vm.chooseJobs === "function") {
            prevPage.$vm.chooseJobs(data);
          }
        },
      });
     //从当前页面，返回上一个页面，调用上一个页面的方法