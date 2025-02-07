function heightChecker(heights: number[]): number {

    let count: number = 0; 
    
    let allHeights: number[] = heights.map(x=>x);
    let sorted: number[] = heights.sort((a,b)=>a-b);
    
     
    for(let i = 0; i < allHeights.length; i++){
        if (sorted[i] !== allHeights[i]){ 
            count = count + 1
        }
    }

    return count;
};