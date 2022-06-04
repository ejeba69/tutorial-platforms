	mov r0, #0		//total = r0
	mov r1, #1		//count = r1
loop: mov r2, r1	//compare = r2
	sub r2, r2, #11
	cmp r2, #0
	beq end
	add r0, r0, r1
	add r1, r1, #1
	b loop
	end: str r0, .WriteUnsignedNum
	halt