#include <stdio.h>

#define True 0
#define False -1

/******************************
 *@Func get_add_result
 *@Desc 获取两数相加结果,如果有一个为负数则返回0
 *@Param  int a 加数
 *@Param  int b 加数
 *@Return int 两数相加之和
 * ****************************/
int get_add_result(int a, int b)
{
    //@CDesc 判断a和b是否为负数
    //@Flow JudgeAB{AB均为正数}
    if (a >= 0 && b >= 0)
    {
        //@Flow 返回a+b结果
        return a + b;
    }
    else
    {
        //@Flow 返回0
        return 0;
    }
}

/******************************
 *@Func get_sub_result
 *@Desc 获取两数相减结果,如果都为负数则返回0
 *@Param  int a 减数
 *@Param  int b 减数
 *@Return int 两数相减结果
 * ****************************/
int get_sub_result(int a, int b)
{
    //@CDesc 判断a和b是否有正数
    //@Flow JudgeAB{AB有一个为正数}
    if (a >= 0 || b >= 0)
    {
        //@Flow 返回a-b结果
        return a - b;
    }
    else
    {
        //@Flow 返回0
        return 0;
    }
}

/******************************
 *@Func calc_mul_result
 *@Desc 计算两数相乘结果
 *@Param  int a 乘数
 *@Param  int b 乘数
 *@Return int 两数相乘结果
 * ****************************/
int calc_mul_result(int src1, int src2)
{
    //@CDesc 返回a*b结果
    return a * b;
}

/******************************
 *@Func main
 *@Desc 程序入口函数
 *@Param  void 参数为空
 *@Return int 返回值为0
 * ****************************/
int main(void)
{
    int a = 15, b = 10;

    /*@CDesc 获取a和b相加的结果*/
    int src1 = get_add_result(a, b);

    /*@CDesc 获取a和b相减的结果*/
    int src2 = get_sub_result(a, b);

    /*·CDesc 计算src1和src2相乘的结果*/
    int ret = calc_mul_result(src1, src2);

    if (ret == 75)
    {
        printf("calc mul success!\n");
    }
    else
    {
        printf("calc mul false!\n");
    }

    return 0;
}
