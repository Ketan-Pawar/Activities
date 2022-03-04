
function waterTrap(height){

        let n = height.length;

        let res = 0;

            for(let i = 1; i < n - 1; i++)
                {
                    // Find maximum element on its left
                    let left = height[i];
                    for(let j = 0; j < i; j++)
                    {
                        left = Math.max(left, height[j]);
                    }
        
                    // Find maximum element on its right
                    let right = height[i];
                    for(let j = i + 1; j < n; j++)
                    {
                        right = Math.max(right, height[j]);
                    }
        
                    // Update maximum water value
                    res += Math.min(left, right) - height[i];
                }
                return res;
    }

var height = [4,2,0,3,2,5];

var res = waterTrap(height);


